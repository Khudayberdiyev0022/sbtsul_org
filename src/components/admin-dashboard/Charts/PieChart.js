import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  fetchVacancysProducts,
  fetchImagesProducts,
  fetchMessagesProducts,
  fetchNewsProducts,
  fetchStudentProducts,
  fetchQuotasProducts,
} from "../../../actions";
import LoaderComponent from "../main-parts/Loader";

const PieChart = (props) => {
  useEffect(() => {
    props.fetchMessagesProducts();
    props.fetchStudentProducts();
    props.fetchNewsProducts();
    props.fetchQuotasProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (
    !props.messages[0] &&
    !props.students[0 && !props.news[0 && !props.quotas[0]]]
  ) {
    return <LoaderComponent />;
  }

  const messageLength = props.messages[0]?.length;
  const quotaLength = props.quotas[0]?.length;
  const newLength = props.news[0]?.length;
  const studentLength = props.students[0]?.length;
  const imagesLength = props.images[0]?.length;
  const vacancytLength = props.vacancys[0]?.length;

  const data = {
    labels: ["Сообщения", "Квоты", "Новости", "Студенты", "Фото", "Вакансии"],
    datasets: [
      {
        label: "Cards",
        data: [
          messageLength,
          quotaLength,
          newLength,
          studentLength,
          imagesLength,
          vacancytLength,
        ],
        backgroundColor: [
          "rgb(0%, 100%, 0%, 0.2)",
          "rgb(22%, 99%, 99%, 0.2)",
          "rgb(100%, 100%, 0%, 0.2)",
          "rgb(100%, 20%, 0%, 0.2)",
          "rgb(93%, 39%, 39%, 0.2)",
          "rgb(0%, 24%, 100%, 0.2)",
        ],
        borderColor: [
          "rgb(0%, 100%, 0%)",
          "rgb(22%, 99%, 99%)",
          "rgb(100%, 100%, 0%)",
          "rgb(100%, 20%, 0%)",
          "rgb(93%, 39%, 39%)",
          "rgb(0%, 24%, 100%)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pie data={data} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    quotas: state.productsQuotas,
    news: state.productsNews,
    messages: state.productsMessages,
    students: state.productsStudents,
    images: state.productsImages,
    vacancys: state.productsVacancys,
  };
};

export default connect(mapStateToProps, {
  fetchVacancysProducts,
  fetchImagesProducts,
  fetchMessagesProducts,
  fetchNewsProducts,
  fetchStudentProducts,
  fetchQuotasProducts,
})(PieChart);
