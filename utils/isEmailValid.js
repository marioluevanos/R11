export function isEmailValid(email) {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) &&
    !/.com\\$|.ocm$|.con$|.cmo$|.copm$|.xom$|.com,$|.vom$|.comn$|.com'$|.co,$|.comj$|.coim$|.cpm$|.colm$|.conm$|.coom$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
}
