import styles from './Table.module.css';

export function Table({ headers, footers, data, renderItem }) {
  return (
    <table className={styles.table} cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th index={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header, headerIndex) => (
              <td key={headerIndex}>{renderItem(item, header.key, index)}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footers && (
        <tfoot>
          {footers.map((footer, index) => (
            <tr key={index}>
              <th>{footer.label}</th>
              <th>{footer.value}</th>
            </tr>
          ))}
        </tfoot>
      )}
    </table>
  );
}
