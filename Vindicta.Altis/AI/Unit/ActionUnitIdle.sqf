#include "common.hpp"

CLASS("ActionUnitIdle", "ActionUnit")

	VARIABLE("timeToComplete")

	METHOD("new") {
		params [P_THISOBJECT, P_OOP_OBJECT("_AI"), P_ARRAY("_parameters")];

		private _duration = CALLSM2("Action", "getParameterValue", _parameters, TAG_DURATION_SECONDS);

		T_SETV("timeToComplete", GAME_TIME + _duration);
	} ENDMETHOD;

	/* override */ METHOD("process") {
		params [P_THISOBJECT];
		if(GAME_TIME > T_GETV("timeToComplete")) then {
			ACTION_STATE_COMPLETED
		} else {
			ACTION_STATE_ACTIVE
		};
	} ENDMETHOD;
ENDCLASS;