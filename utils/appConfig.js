let mode = 'remoteserver' // 'localserver' 'remoteserver' 'noserver'
let domain =
  mode === 'localserver' ? 'http://localhost:1351/' : 'https://api.hosplan.com'

let appConfig = {
  socketURL: domain,
  loginUrl: domain + '/auth/local',
  register: domain + '/auth/local/register',
  searchDefaultUrl: domain + '/home/search',
  specialitiesUrl: domain + '/specialities',
  conditionsUrl: domain + '/conditions',
  treatmentsUrl: domain + '/treatments',
  searchHospitalUrl: domain + '/hospitals',
  searchDoctorUrl: domain + '/doctors',
  searchBookingOrderUrl: domain + '/booking-orders',
  searchMedicalReportUrl: domain + '/test-reports',
  searchPresrcriptionUrl: domain + '/prescriptions',
  searchProfilesUrl: domain + '/profiles',
  geoLocationUrl: `https://asia-east2-handy-amplifier-259811.cloudfunctions.net/geolocation`,
  deleteMedicalReportUrl:
    domain + '/content-manager/explorer/application::test-reports.test-reports',
  commentsUrl: domain + '/comments',
  users: domain + '/users',

  globalConfig: domain + 'global-config',

  forgotPassword: domain + 'homepage/forgotpass',
  resetPassword: domain + 'homepage/resetpass',

  emailService: 'https://generic.html5.run/msg-sendemail',

  emailSender: 'info@gnxgroup.org',
}

export default appConfig
