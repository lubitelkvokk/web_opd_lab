import React from 'react'
import styles from "./SimpleTests.module.css"
import TestPage from './SimpleTests/TestPage'
import SanyaTest from "./SimpleTests/SanyaTest"
// Тут должен быть импорт компонент тестов

const AllTests = () => {
    return (
        <div className={styles.content}>
            {/* <TestPage/> */}
            < SanyaTest />
        </div>
    )
}

export default AllTests
