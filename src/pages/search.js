import '../style/Search.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
function Search() {
  return (
    <div>
      <div className="centerSearch">
        <TextField
          id="filled-error-helper-text"
          label="Search field"
          variant="filled"
          color="secondary"
          size="small"
        />
      </div>
      <div className="centerSearch">
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '100px',
            backgroundColor: '#2FA4FF',
            fontSize: 'small',
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Search;
