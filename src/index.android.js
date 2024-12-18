/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
import { requireNativeComponent } from 'react-native';

const isFabricEnabled = global.nativeFabricUIManager != null;

const RNVectorDrawable = isFabricEnabled
  ? require('./RNVectorDrawableNativeComponent').default
  : requireNativeComponent('RNVectorDrawable');

export default RNVectorDrawable;
