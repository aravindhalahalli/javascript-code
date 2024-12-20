// 1. what is the output of the following code?

function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "Data fetched successfully" });
    }, 1000);
  });
}

function proceesData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const proceesedData = data.message.toUpperCase();
      resolve(proceesedData);
    }, 500);
  });
}

fetchData("https://api.example.com/data")
  .then(proceesData)
  .then((proceesData) => console.log(proceesData))
  .catch((err) => console.log(err));

// Output: DATA FETCHED SUCCESSFULLY
// The fetchData function returns a promise that resolves after 1 second. The proceesData function returns a promise that resolves after 0.5 seconds. The fetchData function is called first, and the proceesData function is called after the fetchData function is resolved. So, the output will be DATA FETCHED SUCCESSFULLY.
