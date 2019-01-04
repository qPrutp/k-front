import React from "react";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Pagination from "components/Pagination/Pagination";
import withStyles from "@material-ui/core/styles/withStyles";

import ProductsStyles from "assets/jss/material-dashboard-react/sections/ProductsStyles.jsx";

const Products = ({ classes }) => (
  <React.Fragment>
    <Card>
      <CardHeader plain color="danger">
        Каталог -> Товари медичного призначення -> Таблетки
      </CardHeader>
      <CardBody color="white">
        <Table
          tableHeaderColor="primary"
          tableHead={["ID", "Товар", "Ціна", "Виробник", "Список пошуком"]}
          tableData={[
            ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
            ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
            ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
            ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
            ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
            ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
            ["7", "Mason Porter", "$78,615", "Chile", "Gloucester"],
            ["8", "Mason Porter", "$78,615", "Chile", "Gloucester"],
            ["9", "Mason Porter", "$78,615", "Chile", "Gloucester"],
            ["10", "Mason Porter", "$78,615", "Chile", "Gloucester"]
          ]}
        />
      </CardBody>
    </Card>
    <div className={classes.pagination}>
      <Pagination
        pages={[
          { text: "Вперед" },
          { text: 1 },
          { text: 2 },
          { active: true, text: 3 },
          { text: 4 },
          { text: 5 },
          { text: "Назад" }
        ]}
        color="danger"
      />
    </div>
  </React.Fragment>
);

export default withStyles(ProductsStyles)(Products);