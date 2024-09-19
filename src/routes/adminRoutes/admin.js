const express = require('express');
const multer = require('multer');
const path = require('path');

const {saveBasic} = require('../../controllers/admin/basics/basic');
const {addProduct} = require('../../controllers/admin/product/addproduct');
const addQuote = require('../../controllers/admin/Quote/addQuote');
const { addHeroSection } = require('../../controllers/admin/hellloPage/addHeroSection');
const { addAppHeroSection } = require('../../controllers/admin/appHeroSection/addAppHeroSection');
const {companyheader} = require('../../controllers/admin/companyPage/companyHeader/companyHeader');
const {addCEOInfo} = require('../../controllers/admin/companyPage/ceo/addCEOInfo');
const { addCourses } = require('../../controllers/admin/courses/addCourses');
const { addEmployees } = require('../../controllers/admin/companyPage/employees/addEmployees');
const {addtrainingAndCoachig} = require('../../controllers/admin/trainingAndCoachig/addtrainingAndCoachig')
const { addTraining } = require('../../controllers/admin/training/addtraining');
const { getInTouch } = require('../../controllers/admin/getInTouch/getInTouch');
const { addWidget } = require('../../controllers/admin/widgets/widgets');
const { addSponsoredCompanies } = require('../../controllers/admin/sponsoredCompanies/addSponsoredCompanies');
const { addCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/addCompanyCooperation');
const { saveParticipant } = require('../../controllers/admin/participant.js/saveParticipant');
const { updateParticipantStatus } = require('../../controllers/admin/participant.js/updateParticipant');


const { getBasic } = require('../../controllers/admin/basics/getBasic');
const { getProduct } = require('../../controllers/admin/product/getProduct');
const { getQuote } = require('../../controllers/admin/Quote/getQuote');
const {getHeroSection} = require('../../controllers/admin/hellloPage/getHeroSection');
const { getAppHeroSection } = require('../../controllers/admin/appHeroSection/getAppHeroSection');
const { getcompanyAbout } = require('../../controllers/admin/companyAboutSection/getcompanyAbout');
const { getCompanyHeader } = require('../../controllers/admin/companyPage/companyHeader/getCompanyheader');
const { getCEOInfo } = require('../../controllers/admin/companyPage/ceo/getCEOInfo');
const { getEmployees } = require('../../controllers/admin/companyPage/employees/getEmployees');
const { getTrainingAndCoachig } = require('../../controllers/admin/trainingAndCoachig/getTrainingAndCoaching');
const { getCourses } = require('../../controllers/admin/courses/getCourses');
const { getTraining } = require('../../controllers/admin/training/getTraining');
const { getWidget } = require('../../controllers/admin/widgets/getWidget');
const { getAllSponsoredCompanies } = require('../../controllers/admin/sponsoredCompanies/getAllSponsoredCompanies');
const { getAllCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/getAllCompanyCooperation');


const { updateBasic } = require('../../controllers/admin/basics/updateBasic');
const { updateAppHeroSection } = require('../../controllers/admin/appHeroSection/updateupdateAppHeroSection');
const { updateCourses } = require('../../controllers/admin/courses/updateCourses');
const { updateTrainingAndCoachig } = require('../../controllers/admin/trainingAndCoachig/updateTrainingAndCoachig');
const { updateProduct } = require('../../controllers/admin/product/updateProduct');
const { updateHeroSection } = require('../../controllers/admin/hellloPage/updateHeroSection');
const { updateQuote } = require('../../controllers/admin/Quote/updateQuote');
const { updateEmployees } = require('../../controllers/admin/companyPage/employees/updateEmployees');
const { updateCompanyHeader } = require('../../controllers/admin/companyPage/companyHeader/updateCompanyHeader');
const { updateCEOInfo } = require('../../controllers/admin/companyPage/ceo/updateCEOInfo');
const { updateTraining } = require('../../controllers/admin/training/updateTraining');
const { updateWidget } = require('../../controllers/admin/widgets/updateWidget');



const { deleteAppHeroSection } = require('../../controllers/admin/appHeroSection/deleteAppHeroSection');
const { deleteCourses } = require('../../controllers/admin/courses/deleteCourse');
const { deleteQuote } = require('../../controllers/admin/Quote/deleteQuote ');
const { deleteProduct } = require('../../controllers/admin/product/deleteProduct');
const { deleteTrainingAndCoaching } = require('../../controllers/admin/trainingAndCoachig/deleteTrainingAndCoaching');
const { deleteHeroSection } = require('../../controllers/admin/hellloPage/deleteHeroSection');
const { deleteEmployees } = require('../../controllers/admin/companyPage/employees/deleteEmployees');
const { deleteTraining } = require('../../controllers/admin/training/deleteTraining');
const { deleteSponsoredCompany } = require('../../controllers/admin/sponsoredCompanies/deleteSponsoredCompany');
const { deleteCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/deleteCompanyCooperation');
const { deleteWidget } = require('../../controllers/admin/widgets/deleteWidget');


const tokenAuthentication = require('../../middlewares/tokenAuthentication');
const { getAllParticipants } = require('../../controllers/admin/participant.js/getAllParticipants');
const { deleteParticipant } = require('../../controllers/admin/participant.js/deleteParticipants');


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}_${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Post API's
router.post('/basic', upload.fields([{ name: 'smallLogo', maxCount: 1 }, { name: 'largeLogo', maxCount: 1 }]), tokenAuthentication, saveBasic);
router.post('/addProduct',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addProduct);
router.post('/quote', tokenAuthentication, addQuote);
router.post('/addHeroSection', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addHeroSection );
router.post('/appHeroSection', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addAppHeroSection);
router.post('/addCompanyHeader', tokenAuthentication, companyheader)
router.post('/addCEOInfo', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addCEOInfo );
router.post('/addEmployees', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addEmployees );
router.post('/addCourses', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , addCourses );
router.post('/addTrainingAndCoaching', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , addtrainingAndCoachig);
router.post('/addTraining', tokenAuthentication, addTraining);
router.post('/addWidget', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication,addWidget );
router.post('/addSponsoredCompanies', upload.array('images', 10), tokenAuthentication, addSponsoredCompanies);
router.post('/addCompanyCooperation', upload.array('images', 10), tokenAuthentication, addCompanyCooperation);


//update API's
router.post('/updatebasic', upload.fields([{ name: 'smallLogo', maxCount: 1 }, { name: 'largeLogo', maxCount: 1 }]), tokenAuthentication, updateBasic);
router.post('/updateQoute/:id', tokenAuthentication, updateQuote)
router.post('/appHeroSection/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateAppHeroSection);
router.post('/courses/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , updateCourses );
router.post('/updateTrainingAndCoaching/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , updateTrainingAndCoachig );
router.post('/updateProduct',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateProduct);
router.post('/updateHeroSection/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateHeroSection );
router.post('/updateEmployee/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateEmployees );
router.post('/updateCompanyHeader', tokenAuthentication, updateCompanyHeader)
router.post('/updateCEOInfo', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateCEOInfo );
router.post('/updateTraining/:id', updateTraining)
router.post('/updateWidget/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication,updateWidget );
router.post('/getInTouch', getInTouch);
router.post('/saveParticipant', saveParticipant)
router.post('/accept/:id', updateParticipantStatus('accepted'));
router.post('/reject/:id', updateParticipantStatus('rejected'));



// Delete API's
router.delete('/appHeroSection/:id',tokenAuthentication, deleteAppHeroSection);
router.delete('/courses/:id',tokenAuthentication, deleteCourses);
router.delete('/deleteQuote/:id',tokenAuthentication, deleteQuote);
router.delete('/deleteProduct/:id',tokenAuthentication, deleteProduct);
router.delete('/deleteTrainingAndCoaching/:id',tokenAuthentication, deleteTrainingAndCoaching);
router.delete('/deleteHeroSection/:id',tokenAuthentication, deleteHeroSection);
router.delete('/deleteEmployee/:id',tokenAuthentication, deleteEmployees);
router.delete('/deleteTraining/:id', deleteTraining)
router.delete('/deleteSponsoredCompany/:imageId', deleteSponsoredCompany)
router.delete('/deleteCompanyCooperation/:imageId', deleteCompanyCooperation)
router.delete('/deleteWidget/:id', deleteWidget);
router.delete('/deleteParticipant/:id', deleteParticipant);


// Get API's
router.get('/basic', getBasic);
router.get('/product', getProduct);
router.get('/quote', getQuote);
router.get('/heroSection', getHeroSection);
router.get('/appHeroSection', getAppHeroSection);
router.get('/companyAbout', getcompanyAbout);
router.get('/companyHeader', getCompanyHeader);
router.get('/ceoInfo', getCEOInfo);
router.get('/employees', getEmployees);
router.get("/trainingAndCoaching", getTrainingAndCoachig);
router.get("/getcourses", getCourses);
router.get('/getTraining', getTraining)
router.get('/getWidgets', getWidget)
router.get('/getAllSponsoredCompanies', getAllSponsoredCompanies)
router.get('/getAllCompanyCooperation', getAllCompanyCooperation)
router.get('/getAllParticipants', getAllParticipants)


module.exports = router;
