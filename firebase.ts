import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
	authDomain: 'je0725.firebaseapp.com',
	projectId: 'je0725',
	storageBucket: 'je0725.appspot.com',
	messagingSenderId: '577855993462',
	appId: '1:577855993462:web:277308346627ed03e79157',
};

//firebase로 구동되는 app이 없으면 아직 인증처리가 되지 않았으므로
//인증처리가 되지 않은 상태에서만 초기화 (불필요한 인증객체 초기화 방지)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
