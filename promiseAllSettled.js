if (!promise.allSettled) {
  Promise.allSettled = promises =>
    Promise.all(
      promises.map((promise, i) =>
        promise
          .then(value => ({
            status: "fulfilled",
            value,
          }))
          .catch(reason => ({
            status: "rejected",
            reason,
          }))
      )
    );
}

Newsletter.prototype.allSettled = function(email_promises) {
    var allSettledPromise = new Promise(function(resolve, reject) {
        // Keep Count
        var counter = email_promises.length;

        // Keep Individual Results in Order
        var settlements = [];
        settlements[counter - 1] = undefined;

        function checkResolve() {
            counter--;
            if (counter == 0) {
                resolve(settlements);
            }
        }

        function recordResolution(index, data) {
            settlements[index] = {
                success: true,
                data: data
            };
            checkResolve();
        }

        function recordRejection(index, error) {
            settlements[index] = {
                success: false,
                error: error
            };
            checkResolve();
        }

        // Attach to all promises in array
        email_promises.forEach(function(email_promise, index) {
            email_promise.then(recordResolution.bind(null, index))
                .catch(recordRejection.bind(null, index));
        });
    });
    return allSettledPromise;
}