const ApprovalContract = artifacts.require('ApprovalContract');
const Payment = artifacts.require('Payment');

module.exports = function(deployer) {
  deployer.deploy(ApprovalContract);
  deployer.deploy(Payment);
}
