
sendMoviesThroughEmail();

async function sendMoviesThroughEmail() {
  const customer = await getCustomer(1);
  console.log('Customer:', customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log('Top Movies: ', movies);
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  }
}

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: 1, name: 'Jash', isGold: true, email: 'belajash@gmail.com'});
    }, 2_000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie 1', 'movie 2']);
    }, 2_000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2_000);
  })
}