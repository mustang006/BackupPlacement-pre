exports.pageNotFound = (req, res, next) => {
  console.log('error is occured');
  
  res.status(404).render('404', {pageTitle: 'Page Not Found', currentPage: '404'});
}