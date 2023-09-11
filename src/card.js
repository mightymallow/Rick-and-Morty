import * as React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const MediaCard = (props) => {
  const {
    img,
    title,
    description,
    order
  } = props
  return (
    <Card sx={{ maxWidth: 425 }} className='card'>
      <CardMedia
        sx={{ height: 250 }}
        image={img}
        title={title}
        className='cardMedia'
      />
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='cardDescription'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ cursor: 'default' }}>{order}</Button>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  order: PropTypes.string
}

export default MediaCard
