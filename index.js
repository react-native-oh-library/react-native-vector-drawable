import * as IosOrAndroidVectorDrawable from '@klarna/react-native-vector-drawable';
import { Platform } from 'react-native';
const isIosOrAndroid = Platform.OS === 'android' || Platform.OS === 'ios';
const VectorDrawable = isIosOrAndroid ? IosOrAndroidVectorDrawable.default : View
export default VectorDrawable