import React, {useState} from 'react'
import {ethers} from 'ethers'
// import './WalletCard.css'

const WalletCard = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error);
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
    <ul className="navbar-nav action">
        <li className="nav-item ml-3">
            {/* <a className="btn ml-lg-auto btn-bordered-white" onClick={connectWalletHandler}> {connButtonText} <i className="icon-wallet mr-md-2" /></a> */}
            <a className="btn ml-lg-auto btn-bordered-white" href="/claim-your-NFT">
				Mint your NFT
				<i className=" m-3 icon-wallet mr-md-2" />
			</a>
        </li>
        {errorMessage}
        {/* <div className='accountDisplay'>
            <h3>Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3>Balance: {userBalance}</h3>
        </div> */}
    </ul>
		
	);
}

export default WalletCard;