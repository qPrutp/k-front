import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

function Dropdup({...props}){
  return (
    <div>
      <p>Оберіть область</p>
      <CustomDropdown
        dropup
        buttonProps={{
          color: "danger",
          block: true,
        }}
        dropdownList={[
          "Всі",
          "Вінницька",
          "Житомирська",
          "Хмельницька",
          "Черкаська",
          "Чернівецька",
        ]}
      />
      <p>Оберіть місто</p>
      <CustomDropdown
        dropup
        buttonProps={{
          color: "danger",
          block: true,
        }}
        dropdownList={[
          "Всі",
          "Вінниця",
          "Бар",
          "Гайсин",
          "Черкаси",
          "Чернівці",
          "Вінниця",
          "Бар",
          "Гайсин",
          "Черкаси",
          "Чернівці",
        ]}
      />
    </div>
  );
}

export default Dropdup;