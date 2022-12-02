const Linking = {
    prefixes: ['my-test://', 'https://localhost', 'http://localhost'],
    config: {
        screens: {
            Home: '',
            Home: 'r/:id',
            Settings: 'settings',
            Profile: 'settings/profile',
            Wallet: 'settings/wallet',
            About: 'settings/about',
            PaymentMethods: 'settings/payment-methods',
            AddPaymentMethod: 'settings/payment-methods/add',
        }
    }
      
}
export default Linking;