"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityEntity = void 0;
class ActivityEntity {
    constructor(_ownerAccountId, _sourceAccountId, _targetAccountId, _timestamp, _money, _id) {
        this._ownerAccountId = _ownerAccountId;
        this._sourceAccountId = _sourceAccountId;
        this._targetAccountId = _targetAccountId;
        this._timestamp = _timestamp;
        this._money = _money;
        this._id = _id;
    }
    get ownerAccountId() {
        return this._ownerAccountId;
    }
    get id() {
        return this._id === undefined ? null : this._id;
    }
    get sourceAccountId() {
        return this._sourceAccountId;
    }
    get targetAccountId() {
        return this._targetAccountId;
    }
    get timestamp() {
        return this._timestamp;
    }
    get money() {
        return this._money;
    }
}
exports.ActivityEntity = ActivityEntity;
//# sourceMappingURL=activity.entity.js.map