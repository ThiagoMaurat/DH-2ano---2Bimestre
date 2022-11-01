/* eslint-disable react/display-name */
import { ComponentType } from 'react';
import { LoadingComponent } from 'features/loading/index';
import React from 'react'

interface WithLoadingProps {
  loading: boolean;
}

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  return (props: T & WithLoadingProps) => (
    <>{props.loading ? <LoadingComponent /> : <></>}</>
  );
}
export default withLoading;
