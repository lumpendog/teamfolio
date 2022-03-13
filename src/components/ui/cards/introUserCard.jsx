import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Bookmark from '../../common/bookmark';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { history } from '../../../utils/core';
import { useSelector, useDispatch } from 'react-redux';
import { getAccountData, toggleBookmark } from '../../../store/users';

const IntroUserCard = ({ user }) => {
  const { id, firstName, lastName, avatarUrl, shortIntroduction } = user;
  const currentUser = useSelector(getAccountData());
  const dispatch = useDispatch();

  const isBookmarked = currentUser?.favourites?.includes(id);

  const redirectToUserPage = () => {
    history.push(`/users/${id}`);
  };

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(currentUser.id, id));
  };

  if (user) {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ width: 56, height: 56 }} src={avatarUrl} aria-label="memberCard" />}
          action={
            <IconButton aria-label="add to favorites" onClick={handleToggleBookmark}>
              <Bookmark status={isBookmarked} />
            </IconButton>
          }
          title={firstName + ' ' + lastName}
        />
        <CardContent sx={{ minHeight: 150 }}>
          <Typography variant="body2" color="text.secondary">
            {shortIntroduction}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" fullWidth={true} onClick={redirectToUserPage}>
            Additional info
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <h1>User Not Found</h1>;
  }
};

IntroUserCard.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default IntroUserCard;
