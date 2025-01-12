/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import * as React from 'react';
import {
  ColorValue,
  StyleProp,
  ViewProps,
  FlexStyle,
  TransformsStyle,
} from 'react-native';

export type VectorDrawableResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'center';

export interface VectorDrawableStyle extends FlexStyle, TransformsStyle {
  resizeMode?: VectorDrawableResizeMode;
  tintColor?: ColorValue;
  opacity?: number;
}

export interface VectorDrawableProps extends ViewProps {
  /**
   * The name of the vector drawable resource.
   */
  resourceName: string;
  /**
   * Style
   */
  style?: StyleProp<VectorDrawableStyle>;
}

declare const VectorDrawable: React.FunctionComponent<VectorDrawableProps>;

export default VectorDrawable;
