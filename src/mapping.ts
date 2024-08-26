import { Entity, log } from '@graphprotocol/graph-ts';
import { MirrorDelegation, MirrorBlock, MirrorSig } from '../generated/schema';

// Handle MirrorDelegation entity
export function handleDelegation(trigger: Entity): void {
  let id = trigger.getString('id');
  let delegator = trigger.getBytes('delegator');
  let delegate = trigger.getBytes('delegate');
  let timestamp = trigger.getI32('timestamp');
  let space = trigger.getString('space');

  let entity = new MirrorDelegation(id);
  entity.delegator = delegator;
  entity.delegate = delegate;
  entity.timestamp = timestamp;
  entity.space = space;
  entity.save();
}

// Handle MirrorBlock entity
export function handleBlock(trigger: Entity): void {
  let id = trigger.getString('id');
  let number = trigger.getBigInt('number');
  let timestamp = trigger.getBigInt('timestamp');

  let entity = new MirrorBlock(id);
  entity.number = number;
  entity.timestamp = timestamp;
  entity.save();
}

// Handle MirrorSig entity
export function handleSig(trigger: Entity): void {
  let id = trigger.getString('id');
  let account = trigger.getBytes('account');
  let msgHash = trigger.getString('msgHash');
  let timestamp = trigger.getBigInt('timestamp');

  let entity = new MirrorSig(id);
  entity.account = account;
  entity.msgHash = msgHash;
  entity.timestamp = timestamp;
  entity.save();
}
