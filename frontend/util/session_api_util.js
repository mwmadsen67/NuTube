export const signup = (user) => {
  return(
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { user: {username: user.username, email: user.email, password: user.password} }
    })
  );
};

export const signin = (user) => {
  return(
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { user: {email: user.email, password: user.password} }
    })
  );
};

export const signout = () => {
  return(
    $.ajax({
      method: 'DELETE',
      url: 'api/session'
    })
  );
};