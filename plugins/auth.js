export default async function ({ app }) {
  // eslint-disable-next-line no-console
  console.log('auth executed');
  if (!app.$auth.loggedIn) {
    return;
  }

  const auth = app.$auth;

  const authStrategy = auth.strategy.name;
  if (authStrategy === 'google') {
    const idToken = auth.getToken(authStrategy).substr(7);
    try {
      const { data } = await app.$axios.$post(`/user/signin/`, { idToken });
      auth.setToken('local', 'Bearer ' + data.access_token);
      setTimeout(() => {
        auth.setStrategy('local');
        setTimeout(async () => {
          await auth.fetchUser();
        });
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
}
