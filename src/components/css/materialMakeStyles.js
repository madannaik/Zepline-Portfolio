import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    background:' #00dbd0',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop:'10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover':{
        background:"red"
    }
  },
});