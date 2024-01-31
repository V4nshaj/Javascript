const day = 'wednesday';
switch (day) {
    case 'monday'://day === monday
        console.log('Today is monday');
        break;
    case 'tuesday':
        console.log('Tuesday');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('It can be wednesday or thrusday');
        break;
    default:
        console.log('NOt valid day');
        break;
}
