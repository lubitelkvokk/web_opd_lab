import React from 'react'
import styles from "./SimpleTests.module.css"
import TestPage from './SimpleTests/TestPage'
// Тут должен быть импорт компонент тестов

const AllTests = () => {
    return (
        <div className={styles.content}>
            <TestPage/>
        </div>
    )
}

export default AllTests
