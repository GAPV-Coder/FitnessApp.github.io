import React from "react";
import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Loader = () => (
	<Stack
		direction="row"
		justifyContent="center"
		alignItems="center"
		width="100%"
	>
		<TailSpin color="#FF2625" height={80} width={80} />
	</Stack>
);

export default Loader;
