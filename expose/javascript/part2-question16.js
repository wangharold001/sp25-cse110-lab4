for (let prop in statistics) {
    const value = statistics[prop];
    if (prop.startsWith('r') || value % 2 === 1) {
      console.log(value);
    }
  }