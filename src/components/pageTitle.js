import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

const PageTitle = ({ title }) => {
  return (
    <h1
      css={css`
        text-align: center;
        font-size: 2.5em;
        margin-top: 0.5em;
      `}
    >
      {title}
    </h1>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle