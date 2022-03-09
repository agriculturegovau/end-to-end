import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CalendarComponent = styled.div`
  border: 1px solid var(--custom-color-foreground-hint);
  border-radius: 5px;
`;

interface CellProps {
  selected?: boolean;
  available?: boolean;
}

export interface CalendarContext {
  setDate: (date: string, active: boolean) => void;
}

export const CalendarContext = React.createContext<CalendarContext>({
  setDate: () => {},
});

const CellComponent = styled.div<CellProps>`
  padding: 6px 10px;
  text-align: center;

  ${(props) =>
    props.selected
      ? css`
          background-color: var(--AU-color-foreground-action);
          color: white;
        `
      : css``}

  ${(props) =>
    props.available
      ? css`
          border: 1px solid var(--AU-color-foreground-action);
          &:hover {
            cursor: pointer;
          }
        `
      : css``}
`;

const CalendarComponent2 = styled.div`
  border: 1px solid var(--custom-color-foreground-hint);
  border-radius: 5px;
  width: fit-content;
  display: grid;
  justify-items: stretch;
  padding: 8px;
  gap: 0px;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarComponent2Header = styled.div`
  grid-column: 1 / span 7;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > :last-child {
    margin-left: auto;
  }
`;

const Cell: React.FC<React.ComponentProps<'div'> & CellProps & { children?: string }> = (props) => {
  const { available, selected } = props;
  const [sel, setSel] = useState(selected);
  const { setDate } = useContext(CalendarContext);

  return available ? (
    <CellComponent
      {...props}
      selected={sel}
      onClick={() => {
        const selected = !sel;
        setSel(selected);

        if (props.children !== undefined) {
          setDate(props.children, selected);
        }
      }}
    />
  ) : (
    <CellComponent {...props} />
  );
};

const CalendarA: React.FC<React.ComponentProps<'div'>> = ({ children, ...props }) => (
  <CalendarComponent2 {...props}>
    <CalendarComponent2Header>
      <strong>December</strong>
      <Cell>⭣</Cell>
      <div>
        <Cell style={{ display: 'inline-block' }}>←</Cell>
        <Cell style={{ display: 'inline-block' }}>→</Cell>
      </div>
    </CalendarComponent2Header>

    <Cell>M</Cell>
    <Cell>T</Cell>
    <Cell>W</Cell>
    <Cell>T</Cell>
    <Cell>F</Cell>
    <Cell>S</Cell>
    <Cell>S</Cell>

    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>3</Cell>
    <Cell>4</Cell>
    <Cell available>5</Cell>
    <Cell available>6</Cell>
    <Cell available>7</Cell>
    <Cell available>8</Cell>
    <Cell>9</Cell>
    <Cell available>10</Cell>
    <Cell available>11</Cell>
    <Cell>12</Cell>
    <Cell>13</Cell>
    <Cell>14</Cell>
    <Cell>15</Cell>
    <Cell>16</Cell>
    <Cell>17</Cell>
    <Cell>18</Cell>
    <Cell>19</Cell>
    <Cell>20</Cell>
    <Cell>21</Cell>
    <Cell>23</Cell>
    <Cell>24</Cell>
    <Cell>25</Cell>
    <Cell>26</Cell>
    <Cell>26</Cell>
    <Cell>27</Cell>
    <Cell>28</Cell>
    <Cell>29</Cell>
    <Cell>30</Cell>
    <Cell>31</Cell>
  </CalendarComponent2>
);

const CalendarB: React.FC<React.ComponentProps<'div'>> = ({ children, ...props }) => (
  <CalendarComponent {...props}>
    <table>
      <caption>
        <div>
          <strong>December</strong>
          <span>˅</span>
        </div>
        <div>
          <div>←</div>
          <div>→</div>
        </div>
      </caption>
      <thead>
        <tr>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>
  </CalendarComponent>
);

const Calendar: React.FC<React.ComponentProps<'div'>> = ({ children, ...props }) => <CalendarA {...props} />;

Calendar.displayName = 'Calendar';

export default Calendar;
