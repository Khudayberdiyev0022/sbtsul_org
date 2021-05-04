import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux'
import { fetchMessagesProducts, fetchNewsProducts, fetchStudentProducts, fetchQuotasProducts } from '../../../actions'
import LoaderComponent from '../main-parts/Loader';


const PieChart = (props) => {
    useEffect(() => {
        props.fetchMessagesProducts()
        props.fetchStudentProducts()
        props.fetchNewsProducts()
        props.fetchQuotasProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!props.messages[0] && !props.students[0 && !props.news[0 && !props.quotas[0]]]) {
        return (
            < LoaderComponent />
        )
    }


    const messageLength = props.messages[0]?.length
    const quotaLength = props.quotas[0]?.length
    const newLength = props.news[0]?.length
    const studentLength = props.students[0]?.length
    const data = {
        labels: ['Messages', 'Quotas', 'News', 'Students'],
        datasets: [
            {
                label: '# of Votes',
                data: [messageLength, quotaLength, newLength, studentLength],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ width: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pie data={data} />
        </div>
    )
};
const mapStateToProps = state => {
    return {
        quotas: state.productsQuotas,
        news: state.productsNews,
        messages: state.productsMessages,
        students: state.productsStudents,
    }
}


export default connect(mapStateToProps, { fetchMessagesProducts, fetchNewsProducts, fetchStudentProducts, fetchQuotasProducts })(PieChart);