import React, { useState } from 'react';

const labels = [
  'src',
  'internal_portfolio_code',
  'status_code',
  'bal_amt',
  'as_of_date',
  'custodian',
  'benchmark',
  'tax_status',
  'retail_institution',
  'legacy_account_flg',
  'advisor_first_name',
  'advisor_last_name',
  'advisor_full_name',
  'advisor_crd_number',
  'firm_name',
  'address_1',
  'address_2',
  'city',
  'state_code',
  'zip_code',
  'firm_crd_number',
  'file_logid',
  'platform',
  'model',
  'solicitor_name'
];

const CheckboxPage: React.FC = () => {
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (label: string) => {
    setCheckedLabels(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setCheckedLabels([]);
    } else {
      setCheckedLabels(labels);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Checkbox Page</h1>
      <form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
            id="selectAll"
          />
          <label className="form-check-label" htmlFor="selectAll">
            Select All
          </label>
        </div>
        {labels.map(label => (
          <div className="form-check" key={label}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={checkedLabels.includes(label)}
              onChange={() => handleCheckboxChange(label)}
              id={label}
            />
            <label className="form-check-label" htmlFor={label}>
              {label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CheckboxPage;