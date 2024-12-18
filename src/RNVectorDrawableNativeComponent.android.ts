/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { ViewProps, ColorValue, HostComponent } from 'react-native';

// @ts-ignore
import { WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
// @ts-ignore
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

export type VectorDrawableResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'center';

export interface VectorDrawableProps extends ViewProps {
  /**
   * The name of the vector drawable resource.
   */
  resourceName: string;
  resizeMode?: WithDefault<VectorDrawableResizeMode, 'contain'>;
  tintColor?: ColorValue;
}

export default codegenNativeComponent<VectorDrawableProps>(
  'RNVectorDrawable'
) as HostComponent<VectorDrawableProps>;
