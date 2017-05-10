import * as React from 'react';

export interface HelloProps { compiler: string; framwork: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framwork}</h1>;