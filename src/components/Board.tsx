import { connect } from 'react-redux';
import { Container, Box ,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles({
  callout1: {
    width: '60%',
    margin: 10,
    fontSize: 15,
    padding: 15,
    textAlign: 'left',
  },
  callout2: {
    width: '60%',
    margin: 10,
    fontSize: 15,
    padding: 15,
    textAlign: 'left',
  },
  box1: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  box2: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  container: {
    marginTop: 30,
  }
});

const Board = ({keyword,searchResult}:Props)=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (typeof searchResult === 'string') {
    return (
      <Container maxWidth="sm" className={classes.container} >
        <Typography sx={{textAlign:'center'}}>'The page was not found, sorry!'</Typography>
      </Container>
    )
  } else {
    return (
      <Container maxWidth="sm" className={classes.container} >
        {searchResult !== null ?
          <Card sx={{ maxWidth: 345, m: '0 auto' }}>
            <CardHeader
              title={searchResult.title}
              subheader="Search Result"
            />
            <CardMedia
              component="img"
              height="194"
              image={searchResult.thumbnail ? searchResult.thumbnail.source : "./images/no_image.jpg"}
              alt={searchResult.title ? searchResult.title : 'No image'}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {searchResult.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                  {searchResult.description}
                </Typography>
                <Typography paragraph>
                  {searchResult.extract}
                  <Box>
                    <Link href={searchResult.content_urls.desktop.page} >Read more</Link>
                  </Box>
                </Typography>
              </CardContent>
            </Collapse>
          </Card> : <Typography variant="h6">Search!</Typography>}
      </Container>

    );
  }

}

type StateToProps = {
  keyword: string,
  searchResult:any
};

type Props = StateToProps

const mapStateToProps =(state:any)=> {
  return{
    keyword: state.keyword,
    searchResult:state.searchResult
  }
}

export default connect(mapStateToProps)(Board);
