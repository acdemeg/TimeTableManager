let schedulesMap = new Map([
  ['1',
    {
    id: 1,
    title: 'My Time Table',
    countRow: 10,
    countColumn: 3,
    start: new Date(Date.now()),
    end: new Date(Date.now() + 3.6e+6),
    slotSize: 'one hour',
    slots: [
      {
        title : undefined,
        type : undefined,
        required : undefined
      },
      {
        title : undefined,
        type : undefined,
        required : undefined
      },
      {
        title : undefined,
        type : undefined,
        required : undefined
      },
    ]
  }
 ],

  ['2',
    {
    id: 2,
    title: 'My Schedule',
    countRow: 12,
    countColumn: 5,
    start: new Date(Date.now()),
    end: new Date(Date.now() + 48e+6),
    slotSize: 'one day',
    slots: [
      {
        title : undefined,
        type : undefined,
        required : undefined
      },
      {
        title : undefined,
        type : undefined,
        required : undefined
      }
    ]
  }]
]);
let mapScheduleIdReservationsMap = new Map();
let mapUserIdReservationsMap = new Map();

const getSchedules = (response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(Array.from(schedulesMap.values())));
}

const getSchedulesById = (response, request, params) => {
  const [ scheduleId ] = params;
  response.setHeader('Content-Type', 'application/json');
  const res = schedulesMap.get(scheduleId);

  if(!res){
    response.statusCode = 404;
    response.end("Not Found");
  }
  else response.end(JSON.stringify(res));
}

const getReservationsOfUser = (response, request, params) => {
  const [ userId ] = params;
  response.setHeader('Content-Type', 'application/json');
  const res = mapUserIdReservationsMap.get(Number(userId));

  if(!res){
    response.statusCode = 404;
    response.end("Not Found");
  }
  else response.end(JSON.stringify(Array.from(res.values())));
}

const getReservationsByScheduleId = (response, request, params) => {
  const [ scheduleId ] = params;
  response.setHeader('Content-Type', 'application/json');
  const res = mapScheduleIdReservationsMap.get(scheduleId);

  if(!res){
    response.statusCode = 404;
    response.end("Not Found");
  }
  else response.end(JSON.stringify(Array.from(res.values())));
}

const addNewSchedule = (response, request) => {
  let postData = '';
  request.setEncoding("utf8");
  request.addListener("data", postDataChunk => {
    postData += postDataChunk;
  });
  request.addListener("end", () => {
    const schedule = JSON.parse(postData);
    schedulesMap.set(schedule.id, schedule);
    response.end("succses");
  });
}

const reserveOfSlot = (response, request, params) => {
  let postData = '';
  request.setEncoding("utf8");
  request.addListener("data", postDataChunk => {
    postData += postDataChunk;
  });
  request.addListener("end", () => {
    createReservation(params, JSON.parse(postData));
    response.end("succses");
  });
};

function createReservation(params, postData){
  const [ scheduleId, numberSlot ] = params;

  const schedule = schedulesMap.get(scheduleId);
  schedule.slots[numberSlot].title = postData.attributes.title;
  schedule.slots[numberSlot].type = postData.attributes.type;
  schedule.slots[numberSlot].required = postData.attributes.required;

  const reservationMap = mapScheduleIdReservationsMap.get(scheduleId);
  const reservationsOfUser = mapUserIdReservationsMap.get(postData.userId);

  (reservationMap) ? reservationMap.set(postData.id, postData)
    : mapScheduleIdReservationsMap.set(scheduleId, new Map([[postData.id, postData]]));

  (reservationsOfUser) ? reservationsOfUser.set(postData.id, postData)
    : mapUserIdReservationsMap.set(postData.userId, new Map([[postData.id, postData]]));
}

module.exports = {
  getSchedules,
  getSchedulesById,
  addNewSchedule,
  reserveOfSlot,
  getReservationsOfUser,
  getReservationsByScheduleId
};
