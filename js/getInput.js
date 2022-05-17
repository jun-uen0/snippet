// thanks link: https://ashiris.hatenablog.com/entry/2017/01/08/202657

// update status: waiting for input
process.stdin.resume();
process.stdin.setEncoding('utf8');

// Run after the all input
process.stdin.on('end', function() {
  console.log('END!!');
});

// Run after the first input
process.stdin.on('data', function(inputData) {
  var input = inputData.slice(0, -1);
  if (input == 'end') {
      // End process when input 'end'
      process.exit(0);
  } else {
      console.log('Input: ' + input);
  }
});

// Run when input 'Ctrl + C'
process.on('SIGINT', function() {
  console.log('Ctrl+C!!');
  // End process
  process.exit(0);
});

// Run after process ends
process.on('exit', function() {
  console.log('EXIT!!');
});
