import React from 'react'
import { ProgressIndicatorIcon } from './progress-indicator'
import clsx from 'clsx'
import { NextRouter, useRouter } from 'next/router'

export type StatusType = 'todo' | 'doing' | 'done'

export type ProgressPages =
  | '/step/eligibility'
  | '/step/applicant-details'
  | '/step/company-details'
  | '/step/facility-details'
  | '/step/existing-registrations'
  | '/step/last-consignment'
  | '/step/product-listing'
  | '/step/consent'

export type WizardStep =
  | ProgressPages
  | '/step/eligibility-step-1'
  | '/step/eligibility-step-2'
  | '/step/eligibility-step-3'
  | '/step/eligibility-step-4'
  | '/step/product-listing/add'
  | '/step/product-listing/[product_index]'

const mapStatusToTitle = {
  todo: 'To do',
  doing: 'Doing',
  done: 'Done',
}

type ItemProps = {
  title: string
  status: StatusType
  href: WizardStep
  router: NextRouter
}

const Item = ({ title, status, href, router }: ItemProps) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .wizard-navigator__item {
                display: flex;
                border-top: 1px solid #636363;
                padding: 10px;
                vertical-align: middle;
                align-items: center;
                border-left: 4px solid transparent;
                color: #343434;
              }
              
              .wizard-navigator__item:last-of-type {
                border-bottom: 1px solid #636363;
              }
              
              .wizard-navigator__item.active {
                border-left-color: #00558B;
              }
              
              .wizard-navigator__item__status,
              .wizard-navigator__item__text {
              }
              
              .wizard-navigator__item__text {
                margin-left: 1em;
              }
              
              .wizard-navigator__item__text span {
                display: block;
              }
          `,
        }}
      />
      <div
        className={clsx(
          'wizard-navigator__item',
          status === 'doing' && 'active'
        )}
      >
        <div className={'wizard-navigator__item__status'}>
          <ProgressIndicatorIcon status={status} />
        </div>
        <div className={'wizard-navigator__item__text'}>
          <span style={{ fontSize: 14 }}>{mapStatusToTitle[status]}</span>
          <span
            style={{
              fontSize: 18,
              fontWeight: status === 'doing' ? 'bold' : 'inherit',
              cursor: 'pointer',
            }}
            onClick={() => router.push(href)}
          >
            {title}
          </span>
        </div>
      </div>
    </>
  )
}

export interface Props<F> {
  formData: F
  stepCompleted(_page: ProgressPages, _form: F): boolean
}

interface NavStep {
  title: string
  root: ProgressPages
  extraPages: Set<string>
}

const ns = (
  title: string,
  root: ProgressPages,
  ...extras: WizardStep[]
): NavStep => ({
  title,
  root,
  extraPages: new Set(extras),
})

const pages: NavStep[] = [
  ns(
    'Requirements checker',
    '/step/eligibility',
    '/step/eligibility-step-1',
    '/step/eligibility-step-2',
    '/step/eligibility-step-3',
    '/step/eligibility-step-4'
  ),
  ns('Applicant details', '/step/applicant-details'),
  ns('Business details', '/step/company-details'),
  ns('Facility details', '/step/facility-details'),
  ns('Existing registration', '/step/existing-registrations'),
  ns('Last consignment to China', '/step/last-consignment'),
  ns(
    'Product listing',
    '/step/product-listing',
    '/step/product-listing/add',
    '/step/product-listing/[product_index]'
  ),
  ns('Check and submit', '/step/consent'),
]

export const Navigator = <F,>({ formData, stepCompleted }: Props<F>) => {
  const router = useRouter()

  return (
    <div className="progress-navigator">
      {pages.map(({ title, root, extraPages }) => (
        <Item
          router={router}
          key={root}
          title={title}
          href={root}
          status={
            extraPages.add(root).has(router.pathname)
              ? 'doing'
              : stepCompleted(root, formData)
              ? 'done'
              : 'todo'
          }
        />
      ))}
    </div>
  )
}
