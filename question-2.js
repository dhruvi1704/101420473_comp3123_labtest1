
const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 'message': 'delayed success!' });
      }, 500);
    });
  };
  
  
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({ 'message': 'delayed exception!' });
      }, 500);
    });
  };
  
  
  resolvedPromise()
    .then((success) => console.log(success))
    .catch((error) => console.error(error));
  
  
  rejectedPromise()
    .then((success) => console.log(success))
    .catch((error) => console.error(error));
  
  
  const delayedSuccess = () => {
    setTimeout(() => {
      let success = { 'message': 'delayed success!' };
      console.log(success);
    }, 500);
  };
  
  
  const delayedException = () => {
    setTimeout(() => {
      try {
        throw new Error('error: delayed exception!');
      } catch (e) {
        console.error(e.message);
      }
    }, 500);
  };
  
  delayedSuccess();
  delayedException();
  