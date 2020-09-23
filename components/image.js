import PropTypes from 'prop-types'

const cx = {
  img: 'cover bg-center h3 w3 w4-l br2 pa0 ma0 ml2 mb2 fr'
}

const Image = ({ cover }) => {
  if (!cover) return null
  return (
    <div
      className={cx.img}
      role='img'
      aria-label='Preview image'
      style={{ backgroundImage: `url(${cover})` }}
    />
  )
}

Image.propTypes = {
  cover: PropTypes.string
}

export default Image
