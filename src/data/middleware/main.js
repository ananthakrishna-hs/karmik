import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import { logger } from "data/middleware/logger";

export default applyMiddleware(thunk, logger);