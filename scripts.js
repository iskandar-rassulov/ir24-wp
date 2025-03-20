document.querySelector('.tile-download').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
});

