import PropTypes from 'prop-types'

const cx = {
  a: 'link underline',
  h2: 'lh-title fw6 f4 mt0 mb3'
}

const Title = ({ title, link }) => {
  if (!title) return null
  return (
    <h2 className={cx.h2}>
      <a href={link} className={cx.a}>
        {title}
      </a>
    </h2>
  )
}

Title.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
}

export default Title
