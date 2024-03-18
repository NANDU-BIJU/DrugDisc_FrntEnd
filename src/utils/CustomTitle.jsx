import React from 'react'
import { Helmet } from "react-helmet";

function CustomTitle({ title }) {
  return (
    <Helmet>
        <title>Excel 2023 | {title}</title>
    </Helmet>
  )
}

export default CustomTitle