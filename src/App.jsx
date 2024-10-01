import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [name, setName] = useState('Jam');
  const [isSelected, setSelection] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected ? `${name} is selected` : 'No goods selected'}
        {isSelected ? (
          <button
            data-cy="ClearButton"
            type="button"
            className={isSelected ? 'delete ml-3' : ''}
            onClick={() => setSelection(false)}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                name === good && isSelected
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={
                    name === good && isSelected ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={`button ${name === good && isSelected ? 'is-info' : ''}`}
                  onClick={() => {
                    setSelection(good === name ? !isSelected : true);
                    setName(good);
                  }}
                >
                  {name === good && isSelected ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
