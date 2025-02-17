import React, { useState } from 'react';

const fields = [
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

const CheckboxForm = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const newCheckedItems = {};
    fields.forEach(field => {
      newCheckedItems[field] = isChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked
    });
  };

  return (
    <div className="container mt-4">
      <h1>Checkbox Form</h1>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={handleSelectAll}
          checked={Object.values(checkedItems).every(Boolean)}
        />
        <label className="form-check-label">Select All</label>
      </div>
      <form>
        {fields.map(field => (
          <div key={field} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={field}
              checked={checkedItems[field] || false}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">{field}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CheckboxForm;