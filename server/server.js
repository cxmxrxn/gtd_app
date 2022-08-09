const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true }));
// app.use(cors());
app.use(cors({origin:'http://localhost:3000'}));


require('../server/config/mongoose.config');
// require('./routes/project.routes')(app);
// require('./routes/action.routes')(app);
// require('./routes/context.routes')(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));