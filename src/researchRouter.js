//EQUITY RESEARCH ROUTER
router.get('/getEquityResearch', function(req, res, next) {
    EquityResearch.aggregate([
      {$lookup:
        {
          from: 'peoples',
          localField: 'people',
          foreignField: '_id',
          as: 'allPeople'
        }
      }
    ], function(err, research) {
      if (err) console.log('houston, we have a problem: ', err);
      res.send(research);
    })
})
